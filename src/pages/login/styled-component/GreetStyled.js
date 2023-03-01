import styled from 'styled-components';


    let Greeting;
    const time = new Date().getHours();

    if (time > 5 && time <= 12) {
        Greeting = styled.p`
        //box-shadow: 0px 0px 3px 5px green ;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke-color: green;
          -webkit-text-stroke-width: thin;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
        `;
    }
    else if (time > 12 && time <=16) {
        Greeting = styled.p`
          //box-shadow: 0px 0px 3px 5px yellow ;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke-color: yellow;
          -webkit-text-stroke-width: thin;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 16 && time <= 20) {
        Greeting = styled.p`
          //box-shadow: 0px 0px 3px 5px blue ;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke-color: blue;
          -webkit-text-stroke-width: 2px;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 20 && time <= 24) {
        Greeting = styled.p`
          //box-shadow: 0px 0px 3px 5px darkblue ;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke-color: darkblue;
          -webkit-text-stroke-width: thin;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }
    else if (time > 0 && time <= 5) {
        Greeting = styled.p`
          //box-shadow: 0px 0px 3px 5px deeppink ;
          -webkit-text-fill-color: #333333;
          -webkit-text-stroke-color: deeppink;
          -webkit-text-stroke-width: thin;
          font-size: 30px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          width: 36vh;
        `;
    }



export default Greeting;