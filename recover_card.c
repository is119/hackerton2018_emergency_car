#include <artik/security.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <unistd.h>
#include <string.h>
#include <ctype.h>
#include <time.h>
void free_see_data(see_data *data)
{
    if (data->length)
        free(data->data);
}

see_data* get_card(){
    see_data* result;
    FILE* fp;
    fp = fopen("client.card","r");
    if (fp == NULL) {perror("Error");exit(EXIT_FAILURE);}
    fseek(fp, 0, SEEK_END);
    long fsize = ftell(fp);
    fseek(fp, 0, SEEK_SET);

    char* content = malloc(fsize + 1);
    fread(content, fsize, 1, f);
    fclose(f);
    content[fsize] = 0;
    see_data = malloc(sizeof(see_data));
    see_data->data = content;
    see_data->length = fsize;
    return see_data;
}
int main(void)
{
    see_data output;
    printf("  . See Initialize ...");
    fflush(stdout);
    if (0 != see_init("is119","secstor")) {
        printf("Fail\n  ! see_init\n");
        return 0;
    }
    printf("ok\n");
 
    printf("  . SEE Read Secure Storage ...");
    fflush(stdout);
    if (0 != see_read_secure_storage("card", 0, storage_size, &output)) {
        printf("Fail\n  ! see_read_secure_storage\n");
        goto exit;
    }
    printf("ok\n");
 
    exit:
        free_see_data(&output);
        if (count > 0)
            free(list);
        printf("  . See Deinitialize ...");
        see_deinit();/
        printf("ok\n");
        fflush(stdout);
    return 0;
}