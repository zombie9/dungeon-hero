const Browser = require('zombie');
var url = 'http://192.168.51.193:8080/game'
var browser = new Browser();

describe('User visits signup page', function() {

  it("should have defined headless browser", function(next){
    expect(typeof browser != "undefined").toBe(true);
    expect(browser instanceof Browser).toBe(true);
    next();
  });


  describe('header', function(){
    it("should visit the site and see the form", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        // expect(browser.html("body")).toContain("CHARACTER NAME:");
        next();
      })
    })
  })
  describe('submits form', function() {
    it("should visit the site and see the form", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        // expect(browser.query("form[value='startGame']")).toBeDefined();
        next();
      })
    })

    it("should be able insert to the players name ", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        // expect(browser.query("input[value='playerName']")).toBeDefined();
        next();
      })
    })

    it("should be able to see the button enter", function(next) {
      browser.visit(url, function(err) {
        expect(browser.success).toBe(true);
        // expect(browser.query("input[value='start']")).toBeDefined();
        next();
      })
    });
  })
})
