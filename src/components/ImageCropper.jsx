import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
  // Define state variables
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  // Callback when cropping is completed
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    // Store the cropped area in pixels
    setCroppedArea(croppedAreaPixels);
  };

  // Callback when the user changes the aspect ratio
  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  // console.log(image, crop, "image");

  return (
    <div className="cropper">
      <div>
        {/* Image Cropper component */}
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "100%",
              height: "80%",
              backgroundColor: "#fff",
            },
          }}
          onAspectRatioChange={onAspectRatioChange}
        />
      </div>

      <div className="action-btns">
        <div className="btn-container">
          <button className="btn btn-outline" onClick={onCropCancel}>
            Cancel
          </button>

          <button
            className="btn"
            onClick={() => {
              onCropDone(croppedArea);
            }}>
            Crop & Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropper;
