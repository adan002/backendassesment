module.exports = {

        getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A small donation is call for. Its the right thing to do.",
                         "A smile is your personal welcome mat.",
                         "A smooth long journey! Great expectations.",
                         "Accept something that you cannot change, and you will feel better.",
                         "Allow compassion to guide your decisions.",
                         "Do not be intimidated by the eloquence of others.",]
                         
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
        //form
        
    }
}
