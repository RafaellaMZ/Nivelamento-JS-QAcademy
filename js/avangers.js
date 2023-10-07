            // API
            var avangers = ['Tony Stark', 'Peter Parker', 'Nathasha Romanoff', 'Steve Rogers', 'Bruce Benner']
            
            function listaVingadores() {

                var ul = document.getElementById('avangers')
                ul.innerHTML = ''
                
                avangers.forEach(function(a){
                    var li = document.createElement('li')
                    var text = document.createTextNode(a)
                    li.appendChild(text)
                    ul.appendChild(li)
                })

            }