function aboutLoader() {
    const content = document.getElementById("content");
    
    const aboutDiv = document.createElement("div");
    aboutDiv.innerText = "At Tom's Restaurant, we believe that dining out is about more than just the food on your plate.  It's about nourishing connections, celebrating special moments, and savoring the joy of delicious cuisine. We hold ourselves to the highest standards,  prioritizing fresh, quality ingredients to craft dishes bursting with flavor.  Our team is driven by a passion for hospitality, offering warm and attentive service in a welcoming environment where everyone feels like a valued guest.  Whether you're joining us for a casual bite or a memorable occasion, we strive to create  an experience that nourishes both body and soul.";
    content.append(aboutDiv)
    
    }
    
    module.exports = aboutLoader;