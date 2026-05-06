
const services = [
    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png"
        }
    },

    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png"
        }
    },

    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png"
        }
    },

    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png"
        }
    },

    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png"
        }
    },
    {
        name: 'সার্বজনীন',
        title: 'জাতীয় জরুরি সেবা',
        description: 'National Emergency Service',
        hotLineNum: '999',
        images: {
            left: "./assets/heart.png",
            rigth: "./assets/ambulance.png",
        }
    },

]

const help_sectore__area = document.querySelector(".sectore__area")



help_sectore__area.innerHTML = services.map((service) => {
    return `
                 <div class="service__card">
                            <div class="heading">
                                <img src=${service.images.rigth} alt="">
                                <img src=${service.images.left} alt="">
                            </div>
                            <div class="content">
                                <h3 class="service__title">${service.title}</h3>
                                <p class="service__description">${service.description}</p>
                                <h1 class="hotLine_num">${service.hotLineNum}</h1>
                                <p class="service__name">${service.name}</p>
                                <div class="service__button__area">
                                    <button><img src="" alt=""><i class="fa-regular fa-copy"></i>Copy</button>
                                    <button><i class="fa-solid fa-phone"></i>Call</button>
                                </div>
                            </div>
                        </div>
    
    `
}).join("")


// history component area start

var history_area_status = false;

const call_history_toggle_btn = document.querySelector(".call_history_toggle_btn i")
const call__history__area = document.querySelector(".call__history__area");

call_history_toggle_btn.addEventListener("click", () => {
    if (history_area_status) {
        call__history__area.classList.remove("show")
        history_area_status = false;
    } else {
        call__history__area.classList.add("show")
        history_area_status = true;
    }
})


// history component area end