const TODAY_MODAL_KEY = 'today_modal_close_time'

const todayModalHandler = {
    set: function () {
        let date = new Date();
         date = date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000); //1일 뒤 (만료일)
        localStorage.setItem(TODAY_MODAL_KEY, date)
    },
    get: function () {
        let now = new Date();
        now = now.setTime(now.getTime());
        return ((+localStorage.getItem(TODAY_MODAL_KEY) || 0) < now)
    }
  };

  export default todayModalHandler;