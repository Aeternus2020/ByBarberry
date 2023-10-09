import "../../styles/describe.css"
import ded from "../../images/ded.svg"

export default function Describe() {
    return (
        <div className="discribe-section about">

            <p className="main-text">THE BARBERRY</p>
            <img src={ded} alt="logo" />
            <p className="text"><a style={{ color: "#FFD700" }}>Barberry</a> - чоловіча вайбова  перукарня, де майстер стане твоїм другом і побратимом. Для нас процес стрижки - це медитація над клієнтом, де в вищій точці переплітаються <a style={{ color: "#FFD700" }}>стиль і творчість</a>. Ця медитація працює тільки в тандемі “барбер-клієнт”, коли другій довіряє першому</p>

        </div>
    )

}