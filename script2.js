const elements = document.querySelectorAll('.card');
const tab1 = elements[0]
const tab2 = elements[1]
const tab3 = elements[2]
const tab4 = elements[3]
const tab5= elements[4]

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 0 && window.scrollY < 300) {
            tab1.classList.remove("invisible")
        }
        else {
            tab1.classList.add("invisible")
        }


        if(window.scrollY >= 600 && window.scrollY < 900) {
            tab2.classList.remove("invisible")
        }
        else {
            tab2.classList.add("invisible")
        }


        if(window.scrollY >= 1088 && window.scrollY < 1388) {
            tab3.classList.remove("invisible")
        }
        else {
            tab3.classList.add("invisible")
        }


        if(window.scrollY >= 1588 && window.scrollY < 1888) {
            tab4.classList.remove("invisible")
        }
        else {
            tab4.classList.add("invisible")
        }

    })

