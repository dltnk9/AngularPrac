const odd = '홀수입니다';
const even = '짝수입니다';

exports.odd = odd;
exports.even = even;

module.exports = {
  odd,
  even,

}
//모듈익스포츠는 한가지 익스포츠할때 쓴다, 이걸 쓰게되면 기존의 익스포츠 참조가 다 끊긴다.