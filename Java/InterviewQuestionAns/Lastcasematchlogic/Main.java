package com;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String mainStr = "xyzXYZccCc";

        Set<Character> uniqueValues = new HashSet<>(); // To store unique lowercase characters
        int counter = 0;

        for (char c : mainStr.toCharArray()) {
            if (Character.isLowerCase(c) && uniqueValues.add(c)) {
                counter++;
            }
        }

        for (char value : uniqueValues) {
            List<Character> tempValues = new ArrayList<>();
            for (char c : mainStr.toCharArray()) {
                if (c == value || c == Character.toUpperCase(value)) {
                    tempValues.add(c);
                }
            }

            if (tempValues.get(tempValues.size() - 1) == value) {
                counter--;
            }
        }

        System.out.println("Counter: " + counter);
    }
}
