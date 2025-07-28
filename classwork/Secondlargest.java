import java.util.Scanner;
public class Secondlargest{

public static void main(String [] args){
	Scanner input = new Scanner(System.in);
	int [] value = new int[5];
	 	int largest = value[0];
		int secondLargest = -999999999;
	
	for(var i = 0; i < value.length; i++){
		System.out.println("Enter the set of numbers");
		value[i] = input.nextInt();
		if(value[i] > largest){secondLargest = largest; largest = value[i];}
		if(largest  > value[i] && value[i] > secondLargest) secondLargest =  value[i];
	}
	System.out.println(largest);
	System.out.println(secondLargest + " secondLargest");
}

}