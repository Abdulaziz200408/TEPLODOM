import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../App.css";

function Brend() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container_product mt-20">
      <div className="flex items-center gap-3 justify-between">
        <h1 className="text-3xl font-semibold mb-6">Бренды</h1>
        <div className="flex items-center gap-3">
          <button className="crcle_menu" onClick={scrollLeft}>
            <FiChevronLeft />
          </button>
          <button className="crcle_menu" onClick={scrollRight}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          gap: "140px",
        }}
      >
        {[
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
          "https://s3-alpha-sig.figma.com/img/e970/ed13/225cd2badea6904b267646bf6117c85c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtBCwQhu3-bZStOv7IBrtYvPP~QHvZpOadjXTaIgWEbCk4UM9vNfcnGTp~JWnjvyEVxArOsWwJkYtgdaGTRC2rTMBQbiYDKJ2yV-dXWm5AWxb5otDyxlJiIYN2DBlwhhb-s6D09uso6aDzxC70rclr1xmlaEt9cBTv~3~6ODhhEkr02SbEkqa1r1jpF1a3VaJ0ZK~HvUYzbMHyBwPsrGvfpkHLVOCL-V6C1ojUKhJVCWjzMEgNy6~RsVi3QMyzu7loruuQuAez-Si9gsg4~ysdG9DbxZ6r3zXNdhemF~cvgXeJIuWx3vpSSy4n-YP2NKR6kYEDG6dymS6Z-x6fJj3w__",
          "https://s3-alpha-sig.figma.com/img/0906/86a3/fd2469fab70ea366f1b0b5cf22b735c4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHgvwFs1vXmfVL8LBqVR6~OOkFF1JGtf7hdXgdamFYpeeKkYQTdkkigz48c27bfVVUVoqxLVsukf4dmrz7E3MC0~S0XIrG4LC8NtuQu1lhluLcNEIx3WTLeHhEcjF1OsaIzkbbcQh5CNBamczkjAB-HqCRLOEPZA5g-AEF4GwioY83Nnv~K9kQxvp5OD~MySTh2nERBsKUOZbsfxxkDDq-F2O2eJeZ0DZpx1AmVif9dmYg5rlo1tmuJXzH2jjw4YWbe9~VzBo9YRS-oKyvcnZgYZ-fDSpP-zSLDpfnkQnG1W85N4mk~3~7PjDjguK4ou24K~2iqXojmeQb7DDVCHXg__",
          "https://s3-alpha-sig.figma.com/img/a89a/64d0/5f1e1a701a113a7e6cfedef0aa365c3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLZhNtSQNzBPAZTi7VD31rRJHXNDxqPe7k5plUoe6mukrL5xJXw-xPDC1GivWK73SQ9zZjKrlaWWOelEeoTRacaPVKpl0jhNO-Nwo4RLy7bEptkehwX3-1vVfgdC9jlJn0dEvh5ib1RRvB9SySd0fSyWq0OZj6Ax1AM2-FXFms8iTcrVE~LZNcDVZOQj8F-2t0DhhwTUKPHHC3CTXo6z~FonMD7-kEEZ51Fq04tU9LSMj3juWnZH-Ar8qrbiPB5TfuzaQooJBn9H1YcEKD7upKc4T9GUPmGUvZLQ2XX2K-G~4Bbo-GLrtW3pXRyA9mg1ALbp1wFu09TxlZUVTLVdEg__",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brend ${index + 1}`}
            className="cursor-pointer h-40 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Brend;
