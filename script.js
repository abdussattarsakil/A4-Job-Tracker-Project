let currentTab='all-btn'

const tabActive=['bg-[#3B82F6]' , 'text-white']
const tabInActive=['bg-gray-100' , 'text-[#64748B]']

function toggleStyle(tab){
    //console.log(tab)
    const tabs =['all-btn','interview-btn','rejected-btn']

    for (const t of tabs){
        const tabName=document.getElementById(t)
        if(t===tab){
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else{
            tabName.classList.add(...tabInActive)
            tabName.classList.remove(...tabActive)
        }
    }
}
toggleStyle(currentTab);