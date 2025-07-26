import java.util.Scanner;
public class Range {

public static void main (String [] args){

	Scanner input = new Scanner (System.in);
	int [] userinput = new int [5];
	System.out.println("Enter Number");
	userinput[0] = input.nextInt();

	int largest = userinput[0];
	int smallest = userinput[0];

	
	for( var i = 0; i < userinput.length; i++){
	System.out.println("Enter Number");
	userinput[i] = input.nextInt();
	if(userinput[i] > largest) largest = userinput[i];
	if(userinput[i] < smallest) smallest = userinput[i];
	}

	int range = largest - smallest;
	System.out.println(range);

}



}