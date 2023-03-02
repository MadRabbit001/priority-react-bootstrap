import React from "react";

import "./Checks.css";
// import ernbox from "./problem-pic/checks/ernbox.PNG";
// import ernerror from "./problem-pic/checks/ernerror.PNG";
// import ernnumber from "./problem-pic/checks/ernnumber.PNG";
// import UTcorrect from "./problem-pic/checks/UTcorrect.PNG";
import SPC1 from "./problem-pic/checks/SPC1";
import SPC2 from "./problem-pic/checks/SPC2";
import SPC3 from "./problem-pic/checks/SPC3";
import SPC4 from "./problem-pic/checks/SPC4";



function Checks(){

    return (

            <div className={"check"}>
            <h1>-צ'קים-</h1>
            <h2 id="ern">בדיקת תקשורת</h2>
            <p className="short">
                נבדוק שגיאות בקובץ ERN Box. בתיקיית קבצי ההתקנה יש מספר קבצים שמפעילים
                את הרכיב, קובץ הטסטר בודק האם יש שגיאות ברכיב
            </p>
            <p>יש להריץ קובץ ErnBoxTest  ובכך לוודא תקינות</p>
            <p>
                שגיאה בהרצת הטסטר, שגיאה זו מזהה שקיימת בעיה בהגדרת תוכנת ERN וצריך
                הגדרה מחדש
            </p>
                <SPC1/>
                <SPC2/>
            <h2 id="mput">הגדרת נתונים</h2>
            <p className="short">
                קבצים אלו ממוקמים בתיקיית ההתקנה של הרכיב, הם מכילים קבצי נתונים שנדרש
                לבצע בהם שינוי על מנת שהרכיב יוכל לעבוד תקין.
            </p>
            <h4>הגדרת MP</h4>
            <p>במידה ו-ERN BOX נכשל, נבדוק קובץ MP</p>
            <p className="short">
                תחילה המסמך יכיל רק אפסים (0) יש לשנות את 6 הספרות הראשונות למס' המסוף
                של הלקוח ולשמור את השינוי שבוצע.
            </p>
            <p>את מספר המסוף ניתן לקחת מהפריורטי משדה "אתרים של הלקוח"</p>
            <h4>הגדרת UT</h4>
            <p><b>יש לשנות</b> את הספרה הראשונה מ-3 ל-1.</p>
            <p><b>יש לשנות</b> את הספרה 8 (היחידה) ל-4 ולבצע שמירה של השינויים.</p>
                <SPC3/>
                <SPC4/>
            </div>
    );
}

export default Checks;