class Support {
    name;
    designation = 'web developer';
    address = 'Bangladesh';
    phone = 123456987;

    constructor(name, phone , address){
        this.name = name
        this.address = address
        this.phone = phone
    }
    startworrk(){
        console.log(this.name, 'Start the Work')
    } 
}

const output = new Support('Pappu', 125896347, 'Rajshahi')
output.startworrk()
console.log(output)