import React from 'react';
import '../../styles/price.css';
import List from './list';

const Price = () => {
    const bigMaster: Record<string, number>  = {
        "стрижка": 500,
        "стрижка + борода": 700,
        "королівське гоління": 400,
        "моделювання бороди": 400,
        "стрижка під насадку (no fade)": 300,
        "камуфляж": 300,
    };

    const master: Record<string, number>  = {
        "стрижка": 400,
        "стрижка + борода": 600,
        "королівське гоління": 400,
        "моделювання бороди": 300,
        "стрижка під насадку (no fade)": 300,
        "камуфляж": 300,
    }

    const smallMaster: Record<string, number>  = {
        "стрижка": 400,
        "стрижка + борода": 600,
        "стрижка під насадку (no fade)": 300,
    }


    return (
        <section className='price' id="target-section">
            <div className='price-content' >
                <span className='section__title price_title'>ціни</span>
                <div className='price-content-master'>
                    <ul>
                        <span className="master-title">старший майстер</span>
                        {Object.keys(bigMaster).map((item) => (
                            <List
                                key={`bigMaster_${item}`}
                                item={item}
                                price={bigMaster[item]} />
                        ))}
                    </ul>
                </div>
                <div className='price-content-master'>
                    <ul>
                        <span className="master-title">майстер</span>
                        {Object.keys(master).map((item) => (
                            <List
                                key={`master_${item}`}
                                item={item}
                                price={master[item]} />
                        ))}
                    </ul>
                </div>
                <div className='price-content-master'>
                    <ul>
                        <span className="master-title">молодший майстер</span>
                        {Object.keys(smallMaster).map((item) => (
                            <List
                                key={`smallMaster_${item}`}
                                item={item}
                                price={smallMaster[item]} />
                        ))}
                    </ul>
                </div>
                {/*<p className="price-note">усі стрижки включають послуги з шампуню для кращих результатів та загального гладкого відчуття. кожна послуга спеціально до волосся, шкіри і запитів клієнта. і стрижки, і гоління включають вибір найкращих помад та косметики після гоління. ми дуже рекомендуємо вам бронювати зустріч попередньо. досить балачок, пора голитися.</p>*/}
                <p className="price-note">
                    Вас вітає Barberry. Для комфорту наших клієнтів введено правило: якщо ви запізнюєтесь більше ніж на 15 хвилин і є наступний запис, ми залишаємо за собою право вас не обслуговувати. З повагою, Barberry.
                </p>

            </div>
        </section>
    );
};

export default Price;
