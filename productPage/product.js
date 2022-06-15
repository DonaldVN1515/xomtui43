// GENDER
  $(function(){
    //Năm tự động điền vào select
        var seYear = $('#year');
        var date = new Date();
        var cur = date.getFullYear();
    
        seYear.append('<option value="">-- Năm --</option>');
        for (i = cur; i >= 1900; i--) {
            seYear.append('<option value="'+i+'">'+i+'</option>');
        };
        
        //Tháng tự động điền vào select
        var seMonth = $('#month');
        var date = new Date();
        
        var month=new Array();
        month[1]="January";
        month[2]="February";
        month[3]="March";
        month[4]="April";
        month[5]="May";
        month[6]="June";
        month[7]="July";
        month[8]="August";
        month[9]="September";
        month[10]="October";
        month[11]="November";
        month[12]="December";
    
        seMonth.append('<option value="">-- Tháng --</option>');
        for (i = 12; i > 0; i--) {
            seMonth.append('<option value="'+i+'">'+month[i]+'</option>');
        };
        
        //Ngày tự động điền vào select
        function dayList(month,year) {
            var day = new Date(year, month, 0);
            return day.getDate();
        }    
        
        $('#year, #month').change(function(){
            //Đoạn code lấy id không viết bằng jQuery để phù hợp với đoạn code bên dưới
            var y = document.getElementById('year');
            var m = document.getElementById('month');
            var d = document.getElementById('day');
            
            var year = y.options[y.selectedIndex].value;
            var month = m.options[m.selectedIndex].value;
            var day = d.options[d.selectedIndex].value;
            if (day == ' ') {
                var days = (year == ' ' || month == ' ')? 31 : dayList(month,year);
                d.options.length = 0;
                d.options[d.options.length] = new Option('-- Ngày --',' ');
                for (var i = 1; i <= days; i++)
                d.options[d.options.length] = new Option(i,i);
            }
        });
    });

// ADDRESS
   if (address_2 = localStorage.getItem('address_2_saved')) {
      $('select[name="calc_shipping_district"] option').each(function() {
        if ($(this).text() == address_2) {
          $(this).attr('selected', '')
        }
      })
      $('input.billing_address_2').attr('value', address_2)
    }
    if (district = localStorage.getItem('district')) {
      $('select[name="calc_shipping_district"]').html(district)
      $('select[name="calc_shipping_district"]').on('change', function() {
        var target = $(this).children('option:selected')
        target.attr('selected', '')
        $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
        address_2 = target.text()
        $('input.billing_address_2').attr('value', address_2)
        district = $('select[name="calc_shipping_district"]').html()
        localStorage.setItem('district', district)
        localStorage.setItem('address_2_saved', address_2)
      })
    }
    $('select[name="calc_shipping_provinces"]').each(function() {
      var $this = $(this),
        stc = ''
      c.forEach(function(i, e) {
        e += +1
        stc += '<option value=' + e + '>' + i + '</option>'
        $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
        if (address_1 = localStorage.getItem('address_1_saved')) {
          $('select[name="calc_shipping_provinces"] option').each(function() {
            if ($(this).text() == address_1) {
              $(this).attr('selected', '')
            }
          })
          $('input.billing_address_1').attr('value', address_1)
        }
        $this.on('change', function(i) {
          i = $this.children('option:selected').index() - 1
          var str = '',
            r = $this.val()
          if (r != '') {
            arr[i].forEach(function(el) {
              str += '<option value="' + el + '">' + el + '</option>'
              $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
            })
            var address_1 = $this.children('option:selected').text()
            var district = $('select[name="calc_shipping_district"]').html()
            localStorage.setItem('address_1_saved', address_1)
            localStorage.setItem('district', district)
            $('select[name="calc_shipping_district"]').on('change', function() {
              var target = $(this).children('option:selected')
              target.attr('selected', '')
              $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
              var address_2 = target.text()
              $('input.billing_address_2').attr('value', address_2)
              district = $('select[name="calc_shipping_district"]').html()
              localStorage.setItem('district', district)
              localStorage.setItem('address_2_saved', address_2)
            })
          } else {
            $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
            district = $('select[name="calc_shipping_district"]').html()
            localStorage.setItem('district', district)
            localStorage.removeItem('address_1_saved', address_1)
          }
        })
      })
    })

// EVENTS


const buyBtn = document.querySelector('.js-product-buy')
const cancelPay = document.querySelector('.js-product-cancel')
const getModelPay = document.querySelector('.js-model-pay')
const login = document.querySelector('.js-login')
const register = document.querySelector('.js-register')
const cancelLogin = document.querySelector('.js-model-cancel-login')
const cancelRegister = document.querySelector('.js-model-cancel-register')
const getModelLogin = document.querySelector('.js-model-login')
const getModelRegister = document.querySelector('.js-model-register')
const CancelModelRegister = document.querySelector('.js-model-overlay-register')
const CancelModelLogin = document.querySelector('.js-model-overlay-login')
const CancelModelProduct = document.querySelector('.js-model-product')
const minusBtn = document.querySelector('js-product-minus')
const numberBtn = document.querySelector('js-product-number')
const plusBtn = document.querySelector('js-product-plus')


function showLogin() {
  getModelLogin.classList.add('open');
} 
function showRegister() {
  getModelRegister.classList.add('open');

}
function cancelModelLogin() {
  getModelLogin.classList.remove('open');

}
function cancelModelRegister() {
  getModelRegister.classList.remove('open');

}

function showPay() {
    getModelPay.classList.add('open');
}
function cancelModelPay() {
    getModelPay.classList.remove('open');
}

function decreaseNumber() {

}

function increaseNumber() {

}

login.addEventListener('click', showLogin)
register.addEventListener('click', showRegister)
cancelLogin.addEventListener('click' , cancelModelLogin)
cancelRegister.addEventListener('click' , cancelModelRegister)
buyBtn.addEventListener('click', showPay)
cancelPay.addEventListener('click', cancelModelPay)
CancelModelRegister.addEventListener('click', cancelModelRegister)
CancelModelLogin.addEventListener('click', cancelModelLogin)
CancelModelProduct.addEventListener('click', cancelModelPay)
// PRODUCT UX

// minusBtn.addEventListener('click', decreaseNumber)
// plusBtn.addEventListener('click', increaseNumber)



const addProduct = document.querySelector('.js-product-plus');
const minusProduct = document.querySelector('.js-product-minus');
const quantityProduct = document.querySelector('.js-product-number');

const minusProductHandle = function() {
  quantityProduct.innerText =- 1
}
const addProductHandle = function() {
  quantityProduct.innerText =+ 1

}
