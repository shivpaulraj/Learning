package com;
import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
        String mainStr = "xyzXYZccCc";
        
        int counter = 0; // Counter for valid lowercase letters
        List<Character> uniqueValues = new ArrayList<>(); // List to store unique characters

        for (int i = 0; i < mainStr.length(); i++) {
            char currentChar = mainStr.charAt(i); // Get the current character

            if (Character.isLowerCase(currentChar)) { // Check if it's a lowercase letter
                
                if (!uniqueValues.contains(currentChar)) { // Add to unique list if not already present
                	counter++;
                	uniqueValues.add(currentChar);
                }
                
            }
           }
        for (char value : uniqueValues) {
        	List<Character> tempValues = new ArrayList<>(); // List to store unique characters
        	Character temp = '\0';
    		
        	for (int i = 0; i < mainStr.length(); i++) {
        		temp = mainStr.charAt(i);
                if((temp == value) || temp == Character.toUpperCase(value)) {                    
        			tempValues.add(mainStr.charAt(i)); 
        		}        		
        	}

            if(tempValues.get(tempValues.size()-1) == value) {
            	counter--;
            }
        }
        // Output results
        System.out.println("Counter: " + counter);}
}
