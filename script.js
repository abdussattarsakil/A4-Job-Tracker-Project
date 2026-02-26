console.log('hi , connected');

let currentTab = 'all-btn'

const tabActive = ['bg-[#3B82F6]', 'text-white']
const tabInActive = ['bg-gray-100', 'text-[#64748B]']

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')


function toggleStyle(tab) {
    //console.log(tab)
    const tabs = ['all-btn', 'interview-btn', 'rejected-btn']

    for (const t of tabs) {
        const tabName = document.getElementById(t)
        if (t === tab) {
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else {
            tabName.classList.add(...tabInActive)
            tabName.classList.remove(...tabActive)
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];
    for (const page of pages) {
        page.classList.add('hidden')
    }

    if (tab === 'all-btn') {
        allContainer.classList.remove('hidden')
    }
    else if (tab === 'interview-btn') {
        interviewContainer.classList.remove('hidden')
    }
    else if (tab === 'rejected-btn') {
        rejectedContainer.classList.remove('hidden')
    }

}
toggleStyle(currentTab);
//-----count update
let totalCount = document.getElementById('total')
let interviewCount = document.getElementById('interview-count')
let rejectedCount = document.getElementById('rejected-count')

totalCount.innerText = allContainer.children.length;
interviewCount.innerText = interviewContainer.children.length
rejectedCount.innerText = rejectedContainer.children.length

// ----card filtering
document.getElementById('jobs-container')
    .addEventListener("click", function (event) {
        const clickBtn = event.target;
        const card = clickBtn.closest('.card')
        //console.log(card)
        const cardStatus = document.querySelector('.cardStatus')

        const parentNode=card.parentNode;

        if (clickBtn.closest('.interviewBtn')) {
            //console.log('hi interviewBtn , how are you baby?');
            interviewContainer.append(card)

            cardStatus.innerText = "Interviewed"
            cardStatus.classList.remove('text-[#002C5C]', 'bg-white')
            cardStatus.classList.add('bg-green-50', 'text-green-500')
        }

        if (clickBtn.closest('.rejectedBtn')) {
            //console.log('hi failureBtn , how are you baby?');
            rejectedContainer.append(card)
            cardStatus.innerText = "Rejected"
            cardStatus.classList.remove('text-[#002C5C]', 'bg-white')
            cardStatus.classList.add('bg-red-50')
        }

        if (clickBtn.closest('.deleteBtn')) {
            //console.log('hi , Sakil I am here');
            //console.log(parentNode);
            parentNode.removeChild(card);
        }
    })