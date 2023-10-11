using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class NetworkManager : MonoBehaviour
{
    private bool _isLoading;

    private void Start()
    {

    }

    private void Update()
    {
        if (Input.GetButtonDown("Jump"))
        {
            if (_isLoading) return;
            _isLoading = true;
            Debug.Log("Loading Data from server");
            StartCoroutine(GetDataFromServer());
        }
    }

    private IEnumerator GetDataFromServer()
    {
        //Get, Post, Put, Delete
        UnityWebRequest webReq = UnityWebRequest.Get("http://localhost:50000");

        yield return webReq.SendWebRequest();

        // ConnectionError, DataProcessingError, ProtocolError
        if (webReq.result == UnityWebRequest.Result.Success)
        {
            string msg = webReq.downloadHandler.text;
            Debug.Log(msg);
        }

        _isLoading = false;
        Debug.Log("Loading complete");
    }

}
