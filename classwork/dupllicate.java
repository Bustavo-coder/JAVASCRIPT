import java.util.Arrays;
public class dupllicate{
		
	public static void main(String [] args){
		int [] setNumbers = {4,5,6,7,2,4,1,2,7,2};
		System.out.println(Arrays.toString(getDuplicate(setNumbers)));


	}

	public static int [] getDuplicate(int[]setArray){
		int [] noDuplicate = new int[setArray.length];
		for(int count = 0; count < setArray.length;count++){
			boolean checkDuplicate = true;
			for(int counter = 0; counter < setArray.length;counter++){
				if(count == counter) continue;
				if(setArray[count] == setArray[counter]) checkDuplicate = false;
				}
			if(checkDuplicate) noDuplicate[count] = setArray[count];			
			}
			
				return noDuplicate;

	}

}