import { DataContext } from "../../scripts/Context";
import { useContext } from "react";

function SocialMedia() {
    const data = useContext(DataContext);

    return (
        <>
            {data.socialMedia.map((item, index) => {
                return (
                    <a key={index} className="social-media-btn" href={item.socialMediaLink} target="_blank" title={item.socialMediaTitle}>
                        <img src={item.socialMediaIcon} alt={item.socialMediaTitle} />
                    </a>
                )
            })
            }
        </>
    )
}

export default SocialMedia;