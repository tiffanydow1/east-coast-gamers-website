'use client';
import { useState } from 'react';

import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import styles from './faqs.module.css';
import { questions } from './questions';

const Faqs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(questions[0].section);

  const setExpanded = (active: string) => {
    if (active === activeSection) {
      setActiveSection(null);
    } else {
      setActiveSection(active);
    }
  }

  return (
    <div className={styles.container}>
      <h1>FAQs</h1>
      <p>Find answers to common questions about apparel, custom 3D printing, and the ordering process.</p>

      <div className={styles.questions}>
        {questions.map(question => (
          <div key={question.section} className={`${styles.expandableContainer} ${activeSection === question.section ? styles.activeContainer : ''}`}>
            <button className={styles.expandableButton} onClick={() => setExpanded(question.section)}>
              <div className={styles.sectionTitle}>
                <p>{question.title}</p>
              </div>
              <div className={styles.expandLinkIcon}>
                <FaAngleDown className={`${styles.arrow} ${activeSection === question.section ? styles.activeArrow : ''}`} />
              </div>
            </button>

            {question.questions.map(item => (
              <div key={item.question} className={`${styles.answerSection} ${activeSection === question.section ? styles.answerSectionActive : ''}`}>
                <div className={styles.question}>
                  <p>{item.question}</p>
                </div>

                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.contact}>
        <h3>Still have questions?</h3>
        <p>Contact us by email for further assistance.</p>
        <a href="mailto: info@eastcoastgamers.ca"><HiOutlineMail className={styles.emailIcon} /> info@eastcoastgamers.ca</a>
      </div>
    </div>
  )
};

export default Faqs;
