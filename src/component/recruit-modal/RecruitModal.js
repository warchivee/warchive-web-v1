import React, { useState, useEffect }  from 'react';
import './RecruitModal.css';
import todayModalHandler from '../../util/modal.util';

const RecruitModal = ({isOpen, setIsOpen}) => {
  const [opacity, setOpacity] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let textOffTimer, textOnTimer;

    if(!isOpen) {
       textOnTimer = setTimeout(() => {
        setOpacity(1);
        setIsEnd(false);
      }, 3000);
    
       textOffTimer = setTimeout(() => {
        setOpacity(0);
        setIsEnd(true);
      }, 8000);
    }
    
    return () => { if(!isOpen) { clearTimeout(textOnTimer); clearTimeout(textOffTimer); } }

  }, [isOpen]);

  return (
    <div className='recruit'>
      <div className="recruit__open_button" onClick={toggleModal}>
        <i class="fa-solid fa-bullhorn"></i>
      </div>
      <div className='recruit__open_button_text'  style={isEnd ? {} : { opacity }}>현재 신규 팀원 모집 중!</div>
   

      {isOpen && (
        <div className="recruit__overlay">
          <div className="recruit__modal">
            <div className="recruit__close_top">
              <div>*이미지를 클릭하면 확대됩니다.</div>
              <i class="fa-solid fa-x"  onClick={toggleModal}></i>
            </div>

            <a href={"/recruit.png"} target="_blank" rel="noreferrer">
              <img src={"/recruit.png"} alt='모집공고' />
            </a>

            <div className="recruit__buttons">
              <div onClick={() => {
                todayModalHandler.set();
                toggleModal();
              }}>오늘 하루 보지 않기</div>
              <div onClick={toggleModal}>닫기</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitModal;
