import './svgs.scss';

export default function YoutubeIcon({changeColor},props) {
  return (
    <div>
        <svg className={"Svgs " + (changeColor && "ChangeColor")} x="0px" y="0px" viewBox="0 0 97.8 97.8" height="1.4em">
        <g>
            <path d="M40,59.6c7.3-3.8,14.6-7.6,21.9-11.4c-7.4-3.8-14.6-7.6-21.9-11.4C40,44.4,40,52,40,59.6z" 
                fill={props.fill}/>
            <path d="M48.9,0C21.9,0,0,21.9,0,48.9s21.9,48.9,48.9,48.9s48.9-21.9,48.9-48.9S75.9,0,48.9,0z M82.2,65.2
				c-0.8,3.7-3.8,6.4-7.5,6.8c-8.6,1-17.2,1-25.8,1s-17.3,0-25.8-1c-3.6-0.4-6.6-3.1-7.5-6.8c-1.2-5.2-1.2-10.9-1.2-16.3
				s0-11.1,1.2-16.3c0.8-3.7,3.8-6.4,7.5-6.8c8.6-1,17.2-1,25.8-1s17.3,0,25.8,1c3.6,0.4,6.6,3.1,7.5,6.8c1.2,5.2,1.2,10.9,1.2,16.3
				S83.4,60,82.2,65.2z" 
                 fill={props.fill}/>
        </g>
        </svg>
    </div>
  )
}
