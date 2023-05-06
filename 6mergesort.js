function sort() {
    let buton1 = document.getElementsByClassName("btn1");
    let buton2 = document.getElementsByClassName("btn2");
  
    buton1[0].disabled = true;
    buton2[0].disabled = true;
    buton1[0].style.background = "#4CAF50";
    buton2[0].style.background = "#4CAF50";
  
    let v = document.getElementById("numbers-container");

    mergeSort(v.children, 0, v.children.length-1);

    buton1[0].disabled = false;
    buton2[0].disabled = false;
    buton1[0].style.background = "#2b9c14";
    buton2[0].style.background = "#2b9c14";
    
}

function mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    const mid = Math.floor((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
  
  function merge(arr, l, mid, r) {
    const temp = [];
    let i = l;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= r) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
      }
    }
    while (i <= mid) {
      temp[k++] = arr[i++];
    }
    while (j <= r) {
      temp[k++] = arr[j++];
    }
    for (i = l, k = 0; i <= r; i++, k++) {
      arr[i] = temp[k];
    }
  }
  