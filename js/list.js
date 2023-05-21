'use strict';

let addButton = document.getElementsByClassName('prob__add_butt')[0];
let prob_list = document.getElementsByClassName('prob__list')[0];
let prob_add = document.getElementsByClassName('prob__add')[0];
let first_prob = document.getElementsByName('JSCore')[0];
let error = document.getElementsByClassName('error')[0];
let closeB = document.getElementsByClassName('close')[0];
let mess = document.getElementsByClassName('mess')[0];

closeB.addEventListener('click', () => {
    document.getElementsByClassName('prob__add_input')[0].removeAttribute('disabled');
    addButton.removeAttribute('disabled');
    error.style.display = 'none';
    document.getElementsByClassName('prob__add_input')[0].focus();
})

let errorMsg = (Msg) => {
    document.getElementsByClassName('prob__add_input')[0].setAttribute('disabled', 'true');
    addButton.setAttribute('disabled', 'true');
    prob_list.setAttribute('disabled', 'true');
    error.style.display = 'flex';
    error.style.justifyContent = 'space-between';
    mess.innerHTML = '<b>Попередження!</b><br>' + Msg;
}

prob_list.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (prob_list.children.length == 2 && e.target.tagName != 'DIV' && e.target.tagName != 'P') {
        errorMsg('Останній таск зі списку Ви не можете видалити.'); e.target.checked = false
    }
    else if (e.target.tagName == 'LABEL') e.target.remove()
    else if (e.target.tagName == 'INPUT') e.target.parentNode.remove();

})

addButton.addEventListener('click', () => {
    let new_prob = document.getElementsByClassName('prob__add_input')[0].value;
    new_prob = new_prob.trim();
    let prob_present = false;
    if (new_prob.length < 1) errorMsg('Пусте поле не можна добавити.')
    else if (prob_list.children.length == 25) errorMsg('Щось Ви вже багато напланували...')
    else {
        for (let i = 1; i < prob_list.children.length; i++)
            if (prob_list.children[i].children[0].nextSibling.textContent == ' ' + new_prob)
                prob_present = true;

        if (prob_present) errorMsg('Такий таск вже існує...')
        else {
            let new_prob_label = first_prob.cloneNode(true);

            new_prob_label.setAttribute('for', new_prob);
            new_prob_label.setAttribute('name', new_prob);

            let label_child = new_prob_label.children[0];
            label_child.setAttribute('id', new_prob);
            label_child.checked = false;
            label_child.nextSibling.textContent = ' ' + new_prob;
            prob_list.append(new_prob_label);

            document.getElementsByClassName('prob__add_input')[0].value = '';
            document.getElementsByClassName('prob__add_input')[0].focus();
        }
    }
})