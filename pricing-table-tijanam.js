document.addEventListener('DOMContentLoaded', function() {
    const planOptionsTijana = document.querySelectorAll('.plan-option-tijana');
    const planContentsTijana = document.querySelectorAll('.plan-content-tijana');

    planOptionsTijana.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsTijana.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsTijana.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionTijana = document.querySelector('.expandable-section-tijana');
    const expandableContentTijana = document.querySelector('.expandable-content-tijana');

    expandableSectionTijana.addEventListener('click', function() {
        expandableContentTijana.style.display = expandableContentTijana.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnTijana = document.getElementById('founder15-book-now-tijana');
    const founder15ScheduleEmbedTijana = document.getElementById('founder15-schedule-embed-tijana');
    const founder15PackageDetailsTijana = document.getElementById('founder15-package-details-tijana');
    const founder15BackToFeaturesTijana = document.getElementById('founder15-back-to-features-tijana');

    founder15BookNowBtnTijana.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedTijana.style.display = 'block';
        founder15PackageDetailsTijana.style.display = 'none';
        founder15BackToFeaturesTijana.style.display = 'block';
    });

    founder15BackToFeaturesTijana.addEventListener('click', function() {
        founder15ScheduleEmbedTijana.style.display = 'none';
        founder15PackageDetailsTijana.style.display = 'block';
        founder15BackToFeaturesTijana.style.display = 'none';
    });

    const growthBookNowBtnTijana = document.getElementById('growth-book-now-tijana');
    const growthScheduleEmbedTijana = document.getElementById('growth-schedule-embed-tijana');
    const growthPackageDetailsTijana = document.getElementById('growth-package-details-tijana');
    const growthBackToFeaturesTijana = document.getElementById('growth-back-to-features-tijana');

    growthBookNowBtnTijana.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedTijana.style.display = 'block';
        growthPackageDetailsTijana.style.display = 'none';
        growthBackToFeaturesTijana.style.display = 'block';
    });

    growthBackToFeaturesTijana.addEventListener('click', function() {
        growthScheduleEmbedTijana.style.display = 'none';
        growthPackageDetailsTijana.style.display = 'block';
        growthBackToFeaturesTijana.style.display = 'none';
    });

    const accelerateBookNowBtnTijana = document.getElementById('accelerate-book-now-tijana');
    const accelerateScheduleEmbedTijana = document.getElementById('accelerate-schedule-embed-tijana');
    const acceleratePackageDetailsTijana = document.getElementById('accelerate-package-details-tijana');
    const accelerateBackToFeaturesTijana = document.getElementById('accelerate-back-to-features-tijana');

    accelerateBookNowBtnTijana.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedTijana.style.display = 'block';
        acceleratePackageDetailsTijana.style.display = 'none';
        accelerateBackToFeaturesTijana.style.display = 'block';
    });

    accelerateBackToFeaturesTijana.addEventListener('click', function() {
        accelerateScheduleEmbedTijana.style.display = 'none';
        acceleratePackageDetailsTijana.style.display = 'block';
        accelerateBackToFeaturesTijana.style.display = 'none';
    });
});
