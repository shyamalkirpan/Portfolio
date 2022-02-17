document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({
    clientId: "36f72b21a13e43788488ddaccb3ff323",
    divId: "adobe-dc-view",
  });
  adobeDCView.previewFile(
    {
      content: {
        location: {
          url: "https://shyamalkirpan.github.io/Portfolio/ShyamalResume.pdf",
        },
      },
      metaData: { fileName: "ShyamalResume.pdf" },
    },
    {
      showAnnotationTools: false,
      showLeftHandPanel: false,
      showPageControls: false,
    }
  );
  document.getElementsByClassName("sdk-HidingBranding-branding")[0].remove();
});
