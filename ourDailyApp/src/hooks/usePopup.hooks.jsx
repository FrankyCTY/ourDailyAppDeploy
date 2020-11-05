import React, {useState} from "react";

export default function useCustomFormik() {
  const [openPopup, setOpenPopup] = useState(false);
  const [renderPopup, setRenderPopup] = useState(null);

  return [openPopup, setOpenPopup, renderPopup, setRenderPopup];
}