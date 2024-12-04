
function tabs(){
    switch_links = document.querySelectorAll('.select_tab a')
    switch_colors = document.querySelectorAll('.select_tab li')

    switch_links.forEach(function( switch_link ){

        switch_link.addEventListener('click', function(){

            data_id = switch_link.getAttribute('data-id')

            document.querySelector('.activeTab').classList.remove('activeTab')
            document.querySelector(data_id).classList.add('activeTab')
        
        })
        
        switch_colors.forEach(function(switch_color) {

            switch_color.addEventListener('click', function(){
                dat_id = switch_color.getAttribute('data-id')

                document.querySelector('.act').classList.remove('act')
                document.querySelector(dat_id).classList.add('act')
                document.querySelector(data_id).classList.add('activeTab')
            })
        
        });

   

    });

}
tabs()


