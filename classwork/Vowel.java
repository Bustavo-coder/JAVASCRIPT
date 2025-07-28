import java.util.Scanner;
public class Vowel {
	public static void main (String [] args){
	Scanner input = new Scanner(System.in);
	String vowel = "AEIOU";
	 // checkVowel("AEIOU");
	System.out.println("Enter The Sentence");
	String sentence = input.nextLine();
	sentence = sentence.toUpperCase();

	int totalVowel = 0;
	int count = 0;
	do{
		for(int counter = 0; counter < 5; counter++){
			if(sentence.charAt(count) == vowel.charAt(counter)) totalVowel++;
		
		}
		count++;

	}while(count < sentence.length());

	System.out.println("The total vowel is  " + totalVowel);
	}


}

