
const expectChai = require('chai').expect
const HomePage = require('../PageObjects/homePage')

describe ('Browse Interactive Investment', ()=>{

    before(()=>{
        browser.url('https://www.ii.co.uk/')
        browser.pause(8000)
        HomePage.acceptCookie.click()
    })

    it('Navigate to Trading Account', ()=>{

        // Navigate to Interactive Investment Trading Account
        const pageTitle = browser.getTitle()
        console.log(pageTitle)

      HomePage.navBarHeading('Services').click()
      const tradingAccount = 'Trading Account'  
        HomePage.heading('Trading Account').click()
      browser.pause(3000)

      // Assert Url = "https://www.ii.co.uk/ii-accounts/trading-account"
       const tradingAccountUrl = browser.getUrl()
       expectChai(tradingAccountUrl).to.equal('https://www.ii.co.uk/ii-accounts/trading-account')
      // Assert Page Heading 
      const PageHeading = HomePage.pageHeading.getText()
      expectChai(PageHeading).to.equal(tradingAccount)

      expectChai(HomePage.logo).to.exist
        browser.pause(5000)
    })

    it('Navigate to Each Header Under Services', () => {
        browser.pause(3000)
        // Capture All Header Items as "Headers" Elements
       const headers = HomePage.headerElements1
        // Use the ForEach loop to select each "header"
        headers.forEach((header) => {
        // Select "Services" Dropdown in the top Nav bar  
        HomePage.navBarHeading('Services').click()
             if (header.isDisplayed())
             { 
                const headerName = (header.getText()).toString()
                console.log(headerName)
             const hrefLink = header.getAttribute('href').toString()
                console.log(hrefLink)
                header.click()
                browser.setTimeout({ 'pageLoad': 100000 })
                const url = browser.getUrl().toString()
                // Assert PageUrl contains href Link Contain(hrefLink)
                expectChai(url).to.include(hrefLink)
                // Assert Logo is displayed
                 expectChai(HomePage.logo).to.exist
                console.log("Page url - " + url + " contains href link - " + hrefLink)
             }
             else 
             {
                     return false
             }
             browser.pause(6000)
             })
 
    })
 

   it('Navigate to Each Header Under Pensions', () => {
       
       
       const headers = HomePage.headerElements1

       browser.pause(3000)
       headers.forEach((header) => {
        // Select "Pensions" Dropdown in the top Nav bar  
        HomePage.navBarHeading('Pensions').click()
             if (header.isDisplayed())
             { 
                const headerName = (header.getText()).toString()
                console.log(headerName)
                    const link = HomePage.heading(headerName)
                const hrefLink = link.getAttribute('href').toString()
              console.log(hrefLink)
                
                link.click()
                browser.setTimeout({ 'pageLoad': 100000 })
                const url = browser.getUrl().toString()
                // Assert PageUrl contains href Link
                expectChai(url).to.include(hrefLink)
                // Assert Logo is displayed
                 expectChai(HomePage.logo).to.exist
                console.log("Page url - " + url + " contains href link - " + hrefLink)
             }
             else 
             {
                     return false
             }
             browser.pause(5000)
             })
   })


    it('Navigate to Each Header under Investments', () => {      
    
    
             const headers = HomePage.headerElements1
      
             browser.pause(3000)
             headers.forEach((header) => {
              // Select Investment Dropdown in the top Nav bar  
              HomePage.navBarHeading('Investments').click()
                   if (header.isDisplayed())
                   { 
                      const headerName = (header.getText()).toString()
                      console.log(headerName)
                      const link = HomePage.heading(headerName)
                     const hrefLink = link.getAttribute('href').toString()
                     header.click()
                      
                      console.log(hrefLink)
                      browser.setTimeout({ 'pageLoad': 100000 })
                      const url = browser.getUrl().toString()
                      // Assert PageUrl contains href Link
                      expectChai(url).to.include(hrefLink)
                // Assert Logo is displayed
                 expectChai(HomePage.logo).to.exist
                      console.log("Page url - " + url + " contains href link - " + hrefLink)
                   }
                   else 
                   {
                           return false
                   }
                   browser.pause(5000)
                   })
        })

        it('Navigate to Each Header under Help and Learning', () => {      
  
            const headers = HomePage.headerElements1
     
            browser.pause(3000)
            headers.forEach((header) => {
             // Select Help & Learning Dropdown in the top Nav bar  
             HomePage.navBarHeading('Help & Learning').click()
                  if (header.isDisplayed())
                  { 
                     const headerName = (header.getText()).toString()
                     console.log(headerName)
                     const hrefLink = header.getAttribute('href').toString()
                     console.log(hrefLink)
                     header.click()
                     browser.setTimeout({ 'pageLoad': 100000 })
                     browser.pause(5000)
                     const url = browser.getUrl().toString()
                     // Assert PageUrl contains href Link
                     expectChai(url).to.include(hrefLink)
                // Assert Logo is displayed
                 expectChai(HomePage.logo).to.exist
                     console.log("Page url - " + url + " contains href link - " + hrefLink)
                  }
                  else 
                  {
                          return false
                  }
                  browser.pause(5000)
               })
       })    
    
     it('Navigate to Each Header under Investments Markets', () => {      
        
            const headers = HomePage.marketHeaderElements
          
            browser.pause(3000)
            headers.forEach((header) => {
            // Select Investment Dropdown in the top Nav bar  
            HomePage.navBarHeading('Investments').click()
            browser.pause(3000)
            if (header.isDisplayed())
                { 
                    const headerName = (header.getText()).toString()
                    console.log(headerName) 
                    const hrefLink = header.getAttribute('href').toString()
                    console.log(hrefLink)
                    header.click()
                    browser.setTimeout({ 'pageLoad': 100000 })
    
                    browser.pause(5000)
                    const url = browser.getUrl().toString()
                    //  Assert PageUrl contains href Link
                    expectChai(url).to.include(hrefLink)
                // Assert Logo is displayed
                 expectChai(HomePage.logo).to.exist
                    console.log("Page url - " + url + " contains href link - " + hrefLink)
                    }
                    else 
                    {
                        return false
                    }
                    browser.pause(5000)
                    })
        })

})
