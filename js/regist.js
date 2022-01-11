function sendit() {
  const expNameText = RegExp(/[가-힣]+$/);
  const expHpText = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
  const expEmailText = RegExp(/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/);

  //id
  if(!$('#userid').val()){
    alert('아이디를 입력하세요');
    $('#userid').focus();
    return false;
  }
  if($('#userid').val().length < 4 || $('#userid').val().length > 20){
    alert('아이디는 4자 이상 20자 이하 작성하세요');
    userid.focus();
    return false;
  }

  //pw
  if(!$('#userpw').val()){
    alert('비밀번호를 입력하세요');
    $('#userpw').focus();
    return false;
  }
  if($('#userpw').val().length < 4 || $('#userpw').val().length > 20){
    alert('비밀번호 4자 이상 20자 이하 작성하세요');
    userid.focus();
    return false;
  }

  //pw check
  if($('#userpw').val() != $('#userpw_re').val()){
    alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
    $('#userpw_re').focus();
    return false;
  }

  //name
  if(!expNameText.test($('#name').val())){
    alert('이름 형식을 확인하세요 \n 한글만 입력가능');
    $('#name').val('');
    $('#name').focus();
    return false;
  }

  //hp
  if(!expHpText.test($('#hp').val())){
    alert('휴대폰 형식을 확인하세요 \n 하이픈(-)을 포함해야함');
    $('#hp').val('');
    $('#hp').focus();
    return false;
  }

  // email
  if(!expEmailText.test($('#email').val())){
    alert('이메일 형식을 확인하세요');
    $('#email').focus();
    return false;
  }

  // hobby
  let isHobby = false;
  for(let i=0; i<$("[name='hobby']").length; i++){
    if($("input:checkbox[name='hobby']").eq(i).is(':checked') == true){
      isHobby = true;
      break;
    }
  }
  if(!isHobby){
    alert('취미는 적어도 하나이상 선택하세요.');
    return false;
  }

  // isssn
  if($('#isssn').val() == 'n'){
    alert('주민등록번호를 검증해 주세요');
    return false;
  }

  return true;
}

$(() => {
  $("#ssn1").on('keyup', () => {
    if($("#ssn1").val().length >= 6){
      $('#ssn2').focus();
    }
  })

  $('#ssnBtn').on('click', () => {
    if($('#ssn1').val() == '' || $('#ssn2').val() == ''){
      alert('주민등록번호를 입력하세요');
      $('#ssn1').focus();
      return false
    }

    const ssn = $('#ssn1').val() + $('#ssn2').val();
    const s1 = Number(ssn.substr(0,1)) * 2;
    const s2 = Number(ssn.substr(1,1)) * 3;
    const s3 = Number(ssn.substr(2,1)) * 4;
    const s4 = Number(ssn.substr(3,1)) * 5;
    const s5 = Number(ssn.substr(4,1)) * 6;
    const s6 = Number(ssn.substr(5,1)) * 7;
    const s7 = Number(ssn.substr(6,1)) * 8;
    const s8 = Number(ssn.substr(7,1)) * 9;
    const s9 = Number(ssn.substr(8,1)) * 2;
    const s10 = Number(ssn.substr(9,1)) * 3;
    const s11 = Number(ssn.substr(10,1)) * 4;
    const s12 = Number(ssn.substr(11,1)) * 5;
    const s13 = Number(ssn.substr(12,1));

    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;

    result = result % 11;
    result = 11 - result;

    if (result >= 10){
      result %= 10;
    }

    if(result == s13){
      alert('유효한 주민등록번호입니다');
      // 검증 클릭시 생년월일 입력
      const century = Number(ssn.substr(6,1));
      const year = ssn.substr(0, 2);
      const month = ssn.substr(2, 2);
      const day = ssn.substr(4, 2);
      if( century == 1 ){
        $("input[name='year']").val(`19${year}`);
      }
      if( century == 2){
        $("input[name='year']").val(`20${year}`);
      }

      $("input[name='month']").val(month);
      $("input[name='day']").val(day);
      $('#isssn').val('y')
    }else{
      alert('유효하지 않은 주민등록번호입니다');
    }
  })

  $('#sss1').on('keydown', () => {
    $('#isssn').val('n');
  })

  $('#sss2').on('keydown', () => {
    $('#isssn').val('n');
  })
})