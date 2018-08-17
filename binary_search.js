function binary_search(sorted_list, item){

    var low_index = 0;
    var high_index = sorted_list.length - 1;

    while(low_index <= high_index){
        let mid_index = (low_index+high_index)/2;
        let guess = sorted_list[mid_index];

        if(guess==item){
            return mid_index;
        } 
        if(guess<item){
            low_index = mid_index+1;
        }
        else {
            high_index = mid_index-1;

        }

    }

  
}

my_sorted_list = [2,4,5,6,7,8,9];
console.log(binary_search(my_sorted_list,5));