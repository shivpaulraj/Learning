import java.util.*;
import java.util.stream.*;

public class CollectorsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Alice", "Charlie");

        // Grouping names by their first letter
        Map<Character, List<String>> groupedByFirstLetter = names.stream()
            .collect(Collectors.groupingBy(name -> name.charAt(0)));

        System.out.println(groupedByFirstLetter);
        // Output: {J=[John], A=[Alice, Alice], B=[Bob], C=[Charlie]}
    }
}
