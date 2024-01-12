import { getPropertiesForId } from "../services/PropertiesServices.js";
// import { clpToUf } from "../utils/getExchangeRate.js";

import	ExchangeRateServices from  "../services/ExchangeRateServices.js";

import {parseToCLPCurrency, clpToUf, validationUF, validationCLP, ufToClp} from "../utils/getExchangeRate.js"

export default async function apiDetalleCall(id, realtorId, statusId, companyId){
    let {data} = await getPropertiesForId(id, realtorId, statusId, companyId );

const response = await ExchangeRateServices.getExchangeRateUF();
const ufValue = response?.UFs[0]?.Valor
const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));

let indicadores;

//! transformar valor del uf a int
const cleanedValue = ufValue.replace(/\./g, '').replace(',', '.');
const ufValueAsInt = parseFloat(cleanedValue).toFixed(0);
//!--

let imagenes;

let splide = new Splide( '.splide' );
let bar    = splide.root.querySelector( '.my-slider-progress-bar' );

let updatedImages = data.images.map(function (image) {
    return image.replace(/\\/g, "//");
});

/* data.images.forEach((images, index) => {imagenes +=
    ` <li class="splide__slide ${ index == 0 ? "active" : ""}"> 
        <img src="${images != null && images != "" && images != undefined  ? images : "img/Sin.png"}" style="height:650px;width:100%;"/>
      </li>	
    ` */
    // indicator += `
    // <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="${index}" ${index == 0 ? "class = active": ""} aria-current="true" aria-label="${index + 1}"></button>
    // `
//    })

/* document.getElementById('carrucel-img').innerHTML = 
`
<li class="splide__slide">${imagenes}</li>
`;

splide.on( 'mounted move', function () {
    let end  = splide.Components.Controller.getEnd() + 1;
    let rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
  } );
  
  splide.mount(); */

//! Imagenes en splide */
let img = '';
updatedImages.forEach((image, index) => {
    img += `
        <li class="splide__slide ${index === 0 ? 'active' : ''}">
            <img src="${image || 'img/Sin.png'}" style="height: 600px; width:100%;object-fit:scale-down" />
        </li>
    `;
});
document.getElementById('carrucel-img').innerHTML = img;

splide = new Splide('.splide', {
    type: 'fade',
    padding: '5rem',
    rewind: true,
    autoplay: 'play',
});

splide.on( 'mounted move', function () {
    let end  = splide.Components.Controller.getEnd() + 1;
    let rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
} );


splide.mount();



document.getElementById('title-dire-prop').innerHTML =
    `<h2 class="title">${data?.title || "No registra Titulo"}</h2>
    <h5 style="color: rgb(156, 156, 156);">${data.city != undefined && data.city != "" && data.city != null ? data.city : "No registra ciudad" }, ${data.commune != undefined && data.commune != "" && data.commune != null ? data.commune : "No registra comuna"},Chile</h5>
    <h5 class="" style="color: rgb(156, 156, 156);">cod: ${data.id}</h5>
    `

	document.getElementById('price-prop').innerHTML= `
    <h2 class="title" style="font-size: 43px;">UF  ${validationUF(data.currency.isoCode) ? data.price : clpToUf(data.price, ufValueAsNumber)}</h2>
    <h5 style="color: rgb(156, 156, 156);">CLP ${validationCLP(data.currency.isoCode) ? parseToCLPCurrency(data?.price): parseToCLPCurrency(ufToClp(data.price, ufValueAsInt))}</h5>
    `

	document.getElementById('caract-prop').innerHTML = `
                    <h3 class="sidebar-title">Caracteristicas</h3>
                    <ul class="mt-3">
                        <li><a style="font-size: 20px;">Tipo de operación: <span style="font-size: 16px;"> <b>${data?.operation || "No registra"}</b></span></a></li>
                        <li><a style="font-size: 20px;">Tipo de propiedad: <span style="font-size: 16px;"><b>${data?.types || "No registra"}</b></span></a></li>
                        <li><a style="font-size: 20px;">Estado: <span style="font-size: 16px;"><b>${data?.installment_type || "No registra"}</b></span></a></li>
                        <li><a style="font-size: 20px;"> Superficie M²:<span style="font-size: 16px;"><b>${data?.surface_m2 || "0"} m²</b></span></a></li>
                        <li><a style="font-size: 20px;">Habitación(es): <span style="font-size: 16px;"><b>${data?.bedrooms || "0"}</b></span></a></li>
                        <li><a style="font-size: 20px;">Baño(s): <span style="font-size: 16px;"><b>${data?.bathrooms || "0"}</b></span></a></li>
                        <li><a style="font-size: 20px;">Estacionamiento(s): <span style="font-size: 16px;"> <b>${data?.coveredParkingLots || "0"}</b></span></a></li>
                    </ul>`


    document.getElementById('descrip-prop').innerHTML = `
                    <div class="content" >
                        <h2 class="title">DESCRIPCIÓN</h2>
                        <p>
                        ${data?.description || "Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat"}
                        </p>
                    </div>`

	document.getElementById('data-realtor').innerHTML= `
                <div class="d-flex justify-content-center">
                    <img class="w-50 py-4" src="${data?.realtor.img || "assets/img/logo/Logo SII-HCP 10kb.png"}">
                </div>
                <h4>${data?.realtor.name || ""} ${data.realtor.lastName || ""}</h4>
                <p>${data?.realtor.mail || "No registra email"}</p>
                <p>${data.realtor.contactPhone != null && data.realtor.contactPhone != undefined ? data.realtor.contactPhone : "No registra número celular" }</p>
                <hr>`

				
	document.getElementById('mapDetail').innerHTML = `
	<div class="section" style="padding-top:0rem; padding-bottom: 1rem;">
		<div class="container">
			<div class="row">
				<h1><b>UBICACIÓN DE LA PROPIEDAD</b></h1>
				<p><i class='bx bx-map'></i> ${data?.city || "No registra dirección"}, ${data?.commune || "No registra Comuna"}, Chile</p>
			</div>	
		</div>
	</div>`
}

	

