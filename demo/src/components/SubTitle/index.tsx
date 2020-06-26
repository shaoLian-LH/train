import React, { FC } from 'react';
import './subTitle.scss';

export interface SubTitleProps{
    title: string,
    addBreak: boolean
}

const SubTitle: FC<SubTitleProps> = (props)=>{
    const {
        title,
        addBreak
    } = props;
    return (
        <div id = "subTitle-main-div">
            <p className = "subTitle-p">{ title }</p>
            { addBreak ? <div className = "subTitle-break"></div>:'' }
        </div>
    )
}

SubTitle.defaultProps = {
    title: "SubTitle",
    addBreak: true
}

export default SubTitle;