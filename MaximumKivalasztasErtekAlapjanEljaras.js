function MaximumKivalasztasErtekAlapjanEljaras(vizsgaltTomb){
	let maxErtek=vizsgaltTomb[0];
    for(let i=1;i<vizsgaltTomb.length;i++)
    {
    	if(vizsgaltTomb[i]>maxErtek)
        {
        	maxErtek=vizsgaltTomb[i];
        }
    }
    document.write("<br>A tömb legnagyobb elemének értéke:"+maxErtek);
}
MaximumKivalasztasErtekAlapjanEljaras(generaltTomb);