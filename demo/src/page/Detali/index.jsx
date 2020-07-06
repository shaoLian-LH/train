import React,{ useEffect, useState, Fragment } from 'react';
import './detail.scss';
import Request from '../../config/Fetch';
import marked from 'marked';
import hljs from 'highlight.js';
import { CalendarOutlined, FireOutlined, LoadingOutlined } from '@ant-design/icons';
import 'highlight.js/styles/monokai-sublime.css';

function Detail (){

    const [ initial, setInitial ] = useState(false);
    const renderer = new marked.Renderer();
    const [ htmlTitle, setHtmltitle ] = useState("");
    const [ htmlContext, setHtmlContext ] = useState("");
    const [ addTime, setAddTime ] = useState("");
    const [ fire, setFire ] = useState("");
    marked.setOptions({
        renderer: renderer,
        //渲染
        gfm: true,
        //是否启动严格markdown模式
        pedantic: false,
        //是否支持Html的标签
        sanitize: false,
        //和gfm搭配，同样是渲染用
        tables: true,
        //换行符的样式，需要gfm
        breaks: false,
        //列表样式渲染，默认是false
        smartLists: true,
        highlight: function(code){
            return hljs.highlightAuto(code).value;
        }
    });
    useEffect(()=>{
        if(!initial){
            setInitial(true);
            fetchData();
        }
        // eslint-disable-next-line
    },[  ])

    const fetchData = ()=>{
        Request.get('new/1')
        .then((res)=>{
            let data = res.data.data;
            setHtmltitle(data.title);
            setHtmlContext(data.content);
            setAddTime(data.addTime);
            setFire(data.fire);
        })
    }

    const content = (
        <div id = "detail-note-main-div">
            <div className = 'detail-note-title'
                dangerouslySetInnerHTML = {{ __html : marked(htmlTitle) }}
            >
            </div>
            <div className = "news-status">
                <p className = "news-p"><CalendarOutlined />{ addTime }</p>
                <p className = "news-p"><FireOutlined />{ fire }</p>
            </div>
            <div 
                className = 'detail-note-body' 
                dangerouslySetInnerHTML = {{ __html : marked(htmlContext) }}
            >
            </div>
        </div>
    )

    return (
        <Fragment>
            <div id="detail-wrap">
            {
                addTime === ''? <LoadingOutlined className = "detail-empty-icon" /> : content
            }
            </div>
        </Fragment>
    )
}

export default Detail;