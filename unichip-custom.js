jQuery(function() { var $ = jQuery;

/**
 * Handles setting up all reactive classes when a user clicks on images
 * inside labels that are inside the ".selectable-images" class.
 */
var FormImgCheckbox = {

    wrapper: '.selectable-images',
    reset: '.selectable-image-reset',

    isSelectedClass: 'selectable-images-selected',

    images: null,
    inputs: null,

    init: function() {

        // Only run this file if the wrapper class is present.
        this.wrapper = $(this.wrapper)
        if (!this.wrapper.length) {
            return;
        }

        // Find all of the images inside labels that have checkboxes.
        this.images = this.wrapper.find('label input + img');
        if (!this.images.length) {
            return;
        }

        // Get the image/field wrapper label.
        this.inputs = this.images.siblings('input');
        this.inputs.change(function(e) {
            var label = $(e.target).closest('label');
            if (e.target.checked) {
                label.addClass(this.isSelectedClass);
            } else {
                label.removeClass(this.isSelectedClass);
            }
        }.bind(this));

        // Is there a reset on the page?
        this.reset = $(this.reset);
        if (this.reset.length) {
            this.reset = this.reset.find('select');
        }
        if (this.reset.length) {

            // Then make sure to remove all selected classes when it changes.
            this.reset.change(function() {
                $('.' + this.isSelectedClass).removeClass(this.isSelectedClass);
            }.bind(this));
        }
    },

};
FormImgCheckbox.init();


});