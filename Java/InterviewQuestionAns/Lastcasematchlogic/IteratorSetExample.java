import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        // Create a list of fruits
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");

        // Get an iterator for the list
        Iterator<String> iterator = fruits.iterator();

        // Iterate through the list using the iterator
        while (iterator.hasNext()) {
            // Get the next element
            String fruit = iterator.next();
            System.out.println(fruit);
        }
    }
}
import java.util.*;

public class IteratorSetExample {
    public static void main(String[] args) {
        // Create a set of fruits
        Set<String> fruits = new HashSet<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");

        // Get an iterator for the set
        Iterator<String> iterator = fruits.iterator();

        // Iterate through the set using the iterator
        while (iterator.hasNext()) {
            // Get the next element
            String fruit = iterator.next();
            System.out.println(fruit);
        }
    }
}

import java.util.*;

public class IteratorMapExample {
    public static void main(String[] args) {
        // Create a map of countries and capitals
        Map<String, String> capitals = new HashMap<>();
        capitals.put("USA", "Washington D.C.");
        capitals.put("India", "New Delhi");
        capitals.put("UK", "London");

        // Get an iterator for the entry set
        Iterator<Map.Entry<String, String>> iterator = capitals.entrySet().iterator();

        // Iterate through the map using the iterator
        while (iterator.hasNext()) {
            Map.Entry<String, String> entry = iterator.next();
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}

import java.util.*;

public class IteratorRemoveExample {
    public static void main(String[] args) {
        // Create a list of fruits
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");

        // Get an iterator for the list
        Iterator<String> iterator = fruits.iterator();

        // Iterate through the list and remove "Banana"
        while (iterator.hasNext()) {
            String fruit = iterator.next();
            if (fruit.equals("Banana")) {
                iterator.remove();  // Remove "Banana"
            }
        }

        // Print the updated list
        System.out.println(fruits);  // Output: [Apple, Cherry, Date]
    }
}
