describe('File Upload Test', () => {
  
    beforeEach(()=>{
      cy.visit('http://localhost:4000/app/en/user/login.html')//Launch the Application
      cy.logIn('test', 'test');//Enter the login credentials
    })
  
    afterEach(()=>{
      cy.logOut();
      cy.validateLoginPage();
    })
  
    it('Success: Test File Upload -- ', () => {
      const validFiles = ["image1.jpeg", "image2.jpg", "image3.png", "image4.gif", "image5.bmp", "image6.svg"];  
      
      cy.validateLandingPage();
      cy.navigateToProfilePage(); 
      cy.validateProfilePage();   
  
      for(let i = 0; i < validFiles.length; i++){
        cy.log("Uploading file-" + i + ": " + validFiles[i])
        cy.get('#file').attachFile(validFiles[i])
        //cy.wait(2000)
        cy.get('#upload').click();
      }
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Uploaded')
      })
          
    })

    it('Fail: Test File Upload', () => {
        const invalidFiles = ["file1.pdf", "file2.tiff", "file3.psd", "file4.esp", "file5.crw", "file6.indd"];  
        
        cy.validateLandingPage();
        cy.navigateToProfilePage(); 
        cy.validateProfilePage();   
    
        for(let i = 0; i < invalidFiles.length; i++){
          cy.log("Uploading file-" + i + ": " + invalidFiles[i])
          cy.get('#file').attachFile(invalidFiles[i])
          //cy.wait(2000)
          cy.get('#upload').click();
        }
        cy.on('window:alert', (text) => {
          expect(text).to.equal('Only formats are allowed : jpeg, jpg, png, gif, bmp, svg')
        })
            
    })

    it('Test Page Not found ', () => {
      cy.get('#go_to_not_found').should('be.visible').contains('Not found').click();
      cy.get('h1').contains('Not Found');
      cy.get('p').contains('The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.');
      cy.go('back');
      cy.get('#go_to_profile').should('be.visible').contains('Profile').click();
          
    })

    it('Test Service Unavailable', () => {
      cy.get('#go_to_service_unavailable').should('be.visible').contains('Service unavailable').click();
      cy.get('h1').contains('Service Unavailable');
      cy.get('p').contains('The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.');
      cy.go('back');
      cy.get('#go_to_profile').should('be.visible').contains('Profile').click();
          
    })

    it('Test Back to Landing Page navigation', () => {
      cy.get('#go_to_profile').should('be.visible').contains('Profile').click();  // Naviate to profile page
      cy.get('.col-6 > .btn').should('be.visible').contains('Back to landing page').click();  // Click on Back to landing page button
      cy.validateLandingPage();   // Validate Landing page elements
      cy.get('#go_to_profile').click()    // Navigate to profile page      
    })
    
})
    
    
       
    
      
      
    