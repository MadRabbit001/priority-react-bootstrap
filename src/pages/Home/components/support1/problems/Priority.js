import React from "react";

import "./Checks.css";
import SMP1 from "./problem-pic/priority/SMP1";
import SMP2 from "./problem-pic/priority/SMP2";
import SMP3 from "./problem-pic/priority/SMP3";
import SMP4 from "./problem-pic/priority/SMP4";
import SMP5 from "./problem-pic/priority/SMP5";
import SMP6 from "./problem-pic/priority/SMP6";


function Priority(){
    return (
        <div className={"check"}>
            <h1>פריוריטי</h1>
            <h2 id="sync">תקלת סנכרון בדיקת פריט ב-Priority Client</h2>
            <p className="war">**באישור ר"צ</p>
            <p>יש להיכנס למסך כרטיס פריט</p>
            <p>לבדוק מה הפריט המרכז</p>
            <p>להיכנס למסך מחירונים</p>
            <p>לבדוק היכן מסומן מחירון pos </p>
            <p>לרדת למסך בן</p>
            <p>לחפש מחירי מוצרים בתוקף</p>
            <p>לשנות את מחיר הפריט</p>
            <SMP1/>
            <h2 id="gift">מנפיקי גיפטים ב-Priority</h2>
            <p><b>מיקום בפריוריטי של כל צד ג' שרלוונטי</b></p>
            <p>סניפים> עמדות מכירה לסניף> מספר מסוףDTS =</p>
            <p>סניפים> עמדות מכירה לסניף> מזהה נקודות צד שלישי = מולטיפאס</p>
            <p>תתי חברות>תתי חברות POS>מזהה רשת פרקסל</p>
            <h4>תקלות מולטיפאס</h4>
            <p><b>באילו שגיאות נפנה את הלקוח למולטיפאס?</b></p>
            <p>"ספק לא מורשה" </p>
            <p>קוד לא מתאים לכרטיס"</p>
            <h4>תקלות בפרקסל</h4>
            <p><b>שגיאת "קוד/רשתות/חנות/קופה אינו מוגדר בפרקסל"</b></p>
            <p className="short">
                יש לבדוק בפריורטי במסך תתי חברות—תתי חברות POS או עמדות מכירה לסניף מזהה
                נקודות צד שלישי.
            </p>
            <p>אם תקין, יש להפנות למרכז רשת על מנת לבדוק עם פרקסל</p>
            <h2 id="return">זיכוי</h2>
            <p className="short">
                <b>לבדיקת זיכויים - יש להיכנס למסך מימוש זיכויים/שוברים בפריוריטי</b>
            </p>
            <h2 id="dis">תקלת מבצעים</h2>
            <p>
                תקלה במבצע בקופה אחת לעיתים תהיה תקלת סנכרון, לצורך כך נבצע אתחול סרוויס
                ונוודא תקינות.
            </p>
            <p>במידה ולא תקין, נבדוק בפריורטי סנכרון במסך 'סטטוס עמדות מכירה'.</p>
            <p><b>במידה והתקלה הינה רוחבית:</b></p>
            <p>
                לוודא דגל פעיל בפריוריטי במסך 'הגדרת מבצעים' > מסך בן סניפים למבצע
                שמסומן דגל > מסך בן פריט למבצע עם מסומן על משפחת מבצעים דגל פעיל >
            </p>
            <SMP2/>
            <p className="short">
                בתוכנת הקופה במסך ניהול מערכת - נתוני מבצע - ניתן להקליד בחיווי קוד מבצע
                את הקוד המבצע הנדרש ולראות האם המבצע נשלף ומכאן הסתכנרן לקופה.
            </p>
            <SMP3/>
            <h2 id="hand">הנחה ידנית</h2>
            <p>
                <b>תקלה:</b> SC22049447– מק"ט לא מקושר למבצע, בדיקה במסך כרטיס פריט לא
                רלוונטי,
            </p>
            <p>
                <b>פיתרון:</b> יש לוודא האם המוכרנית רשאית לבצע הנחה ידנית במסך הבא:
            </p>
            <SMP4/>
            <h2 id="worker">שיוך עובד לסניף</h2>
            <p><b>תקלה:</b>SC22051341 - שיוך עובד לסניף לצורך שימוש במשרד אחורי, </p>
            <p><b>פיתרון:</b> להסביר למנמ"ר היכן לבדוק בפריורטי </p>
            <SMP5/>
            <h2 id="print">הדפסת העתקי עסקאות</h2>
            <p>
                ברירת המחדל של הקופה להדפיס העתק לעסקאות מסוג זיכוי / קופון / הצטרפות
                למועדון.
            </p>
            <p>תחת מסך "נתוני חברה" בפריוריטי קיים דגל "ללא הדפסת עותק נוסף".</p>
            <p>הקופות פועלות לפי מסך סוגי עסקאות.</p>
            <p>
                במסך זה כאשר מסמנים את הדגל - יש עמודה בה ניתן להגדיר האם יודפס העתק
                לסוג העסקה.
            </p>
            <SMP6/>
        </div>
    );
}

export default Priority;