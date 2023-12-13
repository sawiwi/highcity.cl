import {SocialRedes}from "./userId.js";  


const loadInformation=()=>{

    let facebookSocial = document.getElementById("facebookSocial");
    if (facebookSocial !== null){
        facebookSocial.innerHTML = `
        <a class="d-flex align-items-center justify-content-center" href="${SocialRedes.facebok}" target="_blank"
        ><i class="bi bi-facebook"></i
        ></a>
        `;
    }
    let instagramSocial = document.getElementById("instagramSocial");
    if (instagramSocial !== null){
        instagramSocial.innerHTML = `
        <a class="d-flex align-items-center justify-content-center" href="${SocialRedes.instagram}" target="_blank"
        ><i class="bi bi-instagram"></i
        ></a>
        `;
    }
    let tiktokSocial = document.getElementById("tiktokSocial");
    if (tiktokSocial !== null){
        tiktokSocial.innerHTML = `
        <a class="d-flex align-items-center justify-content-center" href="${SocialRedes.tiktok}" target="_blank"
        ><i class="bi bi-tiktok"></i></a>
        `;
    }
    let moreLinkSocial = document.getElementById("moreLinkSocial");
    if (moreLinkSocial !== null){
        moreLinkSocial.innerHTML = `
        <a class="d-flex align-items-center justify-content-center" href="${SocialRedes.allmyLinks}" target="_blank"
        ><i class="bi bi-pin-angle"></i>
        </a>
        `;
    }
}
loadInformation();