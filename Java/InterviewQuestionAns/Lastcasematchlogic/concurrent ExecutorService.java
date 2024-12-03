import java.util.concurrent.*;

public class ExecutorServiceNonBlockingExample {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // Create a thread pool with 2 threads
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Submit asynchronous tasks to the executor
        Future<Integer> futureTask1 = executor.submit(() -> {
            Thread.sleep(1000); // Simulate a long-running task
            System.out.println("Task 1 completed.");
            return 10;
        });

        Future<Integer> futureTask2 = executor.submit(() -> {
            Thread.sleep(500); // Simulate a shorter task
            System.out.println("Task 2 completed.");
            return 20;
        });

        // Main thread continues without waiting for tasks to complete
        System.out.println("Main thread is not blocked, tasks are executing in the background.");

        // Get the results of the tasks when they're done
        Integer result1 = futureTask1.get(); // Blocking call, but only waits for task completion
        Integer result2 = futureTask2.get(); // Blocking call, but only waits for task completion

        System.out.println("Result of Task 1: " + result1);
        System.out.println("Result of Task 2: " + result2);

        // Shutdown the executor service
        executor.shutdown();
    }
}


Conclusion: Non-blocking Techniques in Java
Non-blocking I/O (Java NIO): Allows you to handle multiple I/O operations without blocking threads, making it efficient for high-performance network servers or applications that need to handle many I/O tasks concurrently.
CompletableFuture: A higher-level API that allows writing non-blocking, asynchronous code that is easier to manage than raw threads and callbacks.
ExecutorService: Efficiently manages thread pools and allows you to run tasks asynchronously, without blocking the main thread.