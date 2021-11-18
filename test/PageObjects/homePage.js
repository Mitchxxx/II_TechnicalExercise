class HomePage{

     navBarHeading(heading){
        return $('//div//span[@title="' + heading +'"]')
    }

    heading(header){
        return $('//li//a[contains(text(), "' + header + '")]')
    }

    get headerElements1(){
        return $$('.css-244brj')
    }

    get marketHeaderElements(){
        return $$('.css-j48vme')
    }

    get acceptCookie(){
        return $('//button[contains(text(), "Accept")]')
    }

    get pageHeading() {
        return $('.text-jumbo')
    }
     
    get logo(){
        return $('.css-112zwd6')
    }
}
module.exports = new HomePage()
