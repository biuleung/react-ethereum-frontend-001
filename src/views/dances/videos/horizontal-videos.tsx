import { SelectedVideo } from "src/store"
import VideoItem from "./video-item";
import styles from './horizontal-video.module.scss';
import { v4 } from 'uuid';
import {  useRef } from "react";
// import $ from 'jquery';
// import { Button } from "react-bootstrap";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

type Props = {
    itemList: SelectedVideo[]
}

export const HorizontalVideos: React.FunctionComponent<Props> = ({itemList}) => {
    const ref = useRef<any>(null);
//     const [isLeftScrollingBtnDisabled, setLeftScrollingBtnDisabled] = useState(false);
//     const [isRightScrollingBtnDisabled, setRightScrollingBtnDisabled] = useState(false);

//     useEffect(() => {
//         modifyScrollingBtnsState();
// }, []);

// window.addEventListener('resize', () => {
//     $(`.${styles.rightButton}`).css({top: $('.horizontal-video')[0].offsetTop + 'px'});
//     $(`.${styles.rightButton}`).height($('.horizontal-video')[0].offsetHeight * 0.99 + 'px');
//    });


    // const scroll = (direction: string) => {
    //     if(direction === 'left'){
    //         const scrollOffset = $('.horizontal-video')[0].offsetWidth * 3.5;
    //         if(ref && ref.current) {
    //             ref.current.scrollLeft -= scrollOffset;
    //                     modifyScrollingBtnsState();
    //         }
    //     }else{
    //         const scrollOffset = $('.horizontal-video')[0].offsetWidth * 3.5;
    //         if(ref && ref.current) {
    //             ref.current.scrollLeft += scrollOffset;
    //                     modifyScrollingBtnsState();
               
    //         }
    //     }
    // }

    // const modifyScrollingBtnsState = () => {
    //         if(ref && ref.current) {
    //             if(ref.current.scrollLeft <= 0) {
    //                 setLeftScrollingBtnDisabled(true);
    //                 setRightScrollingBtnDisabled(false);
    //             }else if(ref.current.scrollLeft >= ref.current.clientWidth) {
    //                 setLeftScrollingBtnDisabled(false);
    //                 setRightScrollingBtnDisabled(true);
    //             }else {
    //                 setLeftScrollingBtnDisabled(false);
    //                 setRightScrollingBtnDisabled(false);
    //             }
    //             console.log(ref.current.scrollLeft);
    //         }
    // }

return (
    <>
        <div className={styles.container + " horizontal-videos"}>
            {/* <div className={styles.scrollingButtons}>
                <Button disabled={isLeftScrollingBtnDisabled} variant="dark" className={styles.button} onClick={() => scroll('left')}>
                    <KeyboardArrowLeft />
                    </Button>
                <Button disabled={isRightScrollingBtnDisabled} variant="dark" className={styles.button} onClick={() => scroll('right')}>
                    <KeyboardArrowRight />
                    </Button>
            </div> */}
            <div className={styles.videoScroller} ref={ref}>
                    {itemList && itemList.map((video: SelectedVideo) =>
                <VideoItem type='horizontal-video' key={v4()} videoUrl={video.url} videoHeight='100%' videoWidth="100%" />
            )}
            </div>
        </div>
    </>
)
}
