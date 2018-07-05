/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    // This suite is all about the RSS
    //  feeds definitions, the allFeeds variable in our application.
    describe('RSS Feeds', function () {
        //A test to make sure that the
        // allFeeds variable has been defined and that it is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //A test that ensures  that the allFeeds  has a URL defined and that the URL is not empty.
        it('url defind', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });
        // A test that ensures that the allFeeds object has a name
        // and the name is not empty
        it('Ensure that allFeeds has a name defind and the name is not empty', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });


    //A new testing suit for testing some menu proprities
    describe('The menu', function () {

        //This test to ensures that  the menu element is
        //hidden by default
        let body = $('body');
        let menuIcon = $('.menu-icon-link');
        it('Menu elements are hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);

        });

        // A test that ensures the menu changes
        // visibility when the menu icon is clicked
        it('menu chamges visibility', function () {
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });

    //A test suit to test initial entries "Initial Entries" 
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        })


        //A test that ensures when the loadFeed
        //function is called and completes its work, there is at least
        //a single .entry element within the .feed container.
        it('Ensure that there is at leasta single .entry element within the .feed container',
            function (done) {
                expect($('.feed .entry').length).toBeGreaterThan(0);
                done();
            })

    });
    console.log(` the load feed is ${$('.length .feed').length}`);
    //A test suit for testing new feed selection 
    describe("New Feed Selection", function () {
        // A test that ensures when a new feed is loaded
        //by the loadFeed function that the content actually changes.

        let basicFeed, newFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                basicFeed = $('.feed').text();

                loadFeed(1, function () {
                    newFeed = $('.feed').text();
                    done();
                });
            });
        })
        it('ensures when a new feed is loaded by the loadFeed function that the content actually changes', function () {
            expect(newFeed).not.toBe(basicFeed);

        })
    });
}());