window.designerConfig = {
  components: []
};

function reloadVdxScript() {
  // Identify and remove the existing script
  var oldScript = document.querySelector('script[src="./vdx-component/vdx-components.js"]');
  if (oldScript) {
    oldScript.parentNode.removeChild(oldScript);
  }

  // Create a new script element
  var newScript = document.createElement('script');
  newScript.src = "./vdx-component/vdx-components.js";
  newScript.async = true;

  // Append the new script to the body
  document.body.appendChild(newScript);
}

function loadMockData() {
  window.elementsJSON = [
    ...window.elementsJSON,
    {
      type: 'vdx-gallery',
      config: {
        name: "gallery",
        props: {
          preventRender: false,
          placeholderId: "gallery1",
          collection: {
            contents: [
              {
                imageUrl: "/vdx-component/images/gal_img1.jpg",
                hasLandingUrl: true,
              },
              {
                imageUrl: "/vdx-component/images/gal_img2.jpg",
                hasLandingUrl: true,
              },
              {
                imageUrl: "/vdx-component/images/gal_img3.jpg",
                hasLandingUrl: true,
              },
              {
                imageUrl: "/vdx-component/images/gal_img4.jpg",
                hasLandingUrl: true,
              },
            ],
            arrange: "horizontal",
            imageFit: "cover",
            transition: "chain",
            duration: 1000,
            cycle: true,
          },
          triggerNavigation: {
            enabled: true,
            arrange: "none",
            align: "start",
            overflow: "fade",
            size: "20px",
            outlineNormal: "1px solid #333",
            outlineActive: "3px solid #f00",
            commonStyle: {
              normal: "background-color:rgba(255, 255, 255, 0.25)",
              hover: "background-color:rgba(35, 70, 255, 0.5)",
              active: "background-color:rgba(35, 70, 255, 1)",
            },
            separateStyle: [
              {
                normal: "top:10px; left:10px; background:#f00 center/cover url(vdx-component/images/gal_t1.jpg)",
              },
              {
                normal: "top:30px; left:50px; background:#ff0 center/cover url(vdx-component/images/gal_t2.jpg)",
              },
              {
                normal: "top:50px; left:90px; background:#0f0 center/cover url(vdx-component/images/gal_t3.jpg)",
              },
              {
                normal: "top:70px; left:130px; background:#00f center/cover url(vdx-component/images/gal_t4.jpg)",
              },
            ],
          },
          arrowNavigation: {
            enabled: true,
            arrange: "horizontal",
            size: "60px 60px",
            color: "#29ADE4",
            margin: "0 20px",
            // imagePrev: "images/arrow_left.png",
            // imageNext: "images/arrow_right.png",
            commonStyle: {
              normal: "background-color:rgba(255, 255, 255, 0.5); opacity:0.9; ",
              hover: "background-color:rgba(0, 0, 0, 0.25); opacity:1; ",
              disabled: "background-color:rgba(0, 0, 0, 0.25); opacity:0.5; ",
            },
          },
          swipeNavigation: {
            enabled: true,
            axis: "horizontal",
          },
          timer: {
            duration: 3000,
            resume: 2000,
          },
          controls: {
            enabled: true,
            muteToggle: true,
            playToggle: false,
          },
          progress: {
            enabled: true,
            theme: "circular",
            position: "tr",
            width: 4,
            roundCap: true,
            color: "#FFFFFF",
            bgColor: "#4460DE",
            btnColor: "#FFFFFF",
            size: 80,
            bgSize: 90,
          },
        },
        callbacks: {
          onClick: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onClick(${event.index})`, event);
            // Expo.designerAPI.fireDynamicPixel("gallery_slide_click_" + event.slide, [{"eventName":"clickLive", "multi":true}]);
            // Expo.designerAPI.openUrl("http://exponential.com/", "gallery_slide_click_" + event.slide);
            // Expo.designerAPI.pause();
          },
          onChange: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onChange(${event.index})`, event);
            // switch(event.slideTo) {
            //   case 1:
            //     Expo.designerAPI.firePixel("ImageGallery_Slide1", [{"eventName":"intLive", "multi":true}]);
            //     break;
            //   case 2:
            //     Expo.designerAPI.firePixel("ImageGallery_Slide2", [{"eventName":"intLive", "multi":true}]);
            //     break;
            //   case 3:
            //     Expo.designerAPI.firePixel("ImageGallery_Slide3", [{"eventName":"intLive", "multi":true}]);
            //     break;
            //   case 4:
            //     Expo.designerAPI.firePixel("ImageGallery_Slide4", [{"eventName":"intLive", "multi":true}]);
            //     break;
            // }
          },
          onPlayPauseClick: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onPlayPauseClick(${event.index})`, event);
            // Expo.designerAPI.firePixel("ImageGallery_playpause_click", [{"eventName":"intLive", "multi":true}]);
          },
          onTriggerClick: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onTriggerClick(${event.index})`, event);
            // Expo.designerAPI.firePixel("ImageGallery_trigger_click", [{"eventName":"intLive", "multi":true}]);
          },
          onPrevArrowClick: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onPrevArrowClick(${event.index})`, event);
            // Expo.designerAPI.firePixel("ImageGallery_left_arrow_click", [{"eventName":"intLive", "multi":true}]);
          },
          onNextArrowClick: function (Expo, event) {
            console.info(`design-config /// Gallery.callbacks.onNextArrowClick(${event.index})`, event);
            // Expo.designerAPI.firePixel("ImageGallery_right_arrow_click", [{"eventName":"intLive", "multi":true}]);
          },
        },
      },
      props: {
        // title: "VDXC_gallery1",
        innerHTML: '<div id="ad-unit"><div id="ad-header"></div><div id="ad-body"><div class="ad-full-fit" title="VDXC_gallery1"></div></div></div></div>',
        style: { x: 0, y: 0, zIndex: -10 },
      }
    }
  ]
}

function loadVDXComponents() {
  clearCanvas()
  loadMockData()
  if (window.elementsJSON.length > 0) {
    reloadVdxScript()
  }

  window.designerConfig.components = [
    // ...window.designerConfig.components,
    ...window.elementsJSON.filter(element => element.config).map(element => element.config)
  ]

  window.renderer.renderElements(window.elementsJSON, window.canvasContainer, "Vanilla");
}

function loadVDXComponentsWithNewImage() {
  clearCanvas()
  loadMockData()
  // replace window.elementsJSON with new image for type = vdx-gallery
  // image url = https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  window.elementsJSON.map(element => {
    if (element.type === 'vdx-gallery') {
      element.config.props.collection.contents[0].imageUrl = 'vdx-component/images/patrick-robert-doyle-EkBCBo7vmM4-unsplash.jpg'
    }
  })
 
  if (window.elementsJSON.length > 0) {
    reloadVdxScript()
  }

  window.designerConfig.components = [
    // ...window.designerConfig.components,
    ...window.elementsJSON.filter(element => element.config).map(element => element.config)
  ]

  window.renderer.renderElements(window.elementsJSON, window.canvasContainer, "Vanilla");
}

function clearCanvas() {
  var galleryDiv = document.querySelector('vdx-gallery');
  if (galleryDiv) {
    galleryDiv.parentNode.removeChild(galleryDiv);
  }

  // remove the existing script
  var oldScript = document.querySelector('script[src="./vdx-component/vdx-components.js"]');
  if (oldScript) {
    oldScript.parentNode.removeChild(oldScript);
  }

  // remove vdx-gallery from window.elementsJSON
  window.elementsJSON = window.elementsJSON.filter(element => element.type !== 'vdx-gallery');
  // clean id=canvas
  // document.getElementById('canvas').innerHTML = '';
}

document.getElementById("loadGalleryButton").addEventListener("click", loadVDXComponents);
document.getElementById("loadGalleryWithNewImageButton").addEventListener("click", loadVDXComponentsWithNewImage);
document.getElementById("removeGalleryButton").addEventListener("click", clearCanvas);

